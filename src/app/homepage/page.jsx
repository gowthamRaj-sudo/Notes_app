"use client";
import Input from "@/components/input/Input";
import NoteCard from "@/components/NoteCard/NoteCard";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import AddNoteModal from "@/components/AddNoteModal/AddNoteModal";
import Toast from "@/components/Toast/Toast";
import UpdateNoteModal from "@/components/UpdateNoteModal/UpdateNoteModal";

const page = () => {
  const user = useStore((state) => state.user);
  const notes = useStore((state) => state.notes);
  const addNote = useStore((state) => state.addNote);
  const deleteNote = useStore((state) => state.deleteNote);
  const updateNote = useStore((state) => state.updateNote);
  const router = useRouter();
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [selectNote, setSelectedNote] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const handleFloatingClick = () => {
    setShowModal(true);
  };
  useEffect(() => {
    if (!user) router.push("/signin");
  }, [user]);

  console.log("selectNote---", selectNote);

  const showToast = (msg, type) => {
    setToast({ message: msg, type });
  };

  function handleSave(e) {
    console.log("idd---", editingId);
    e.preventDefault();
    if (editingId) {
      updateNote({
        id: editingId,
        content: selectNote.content,
        title: selectNote.title,
      });
      showToast("Note updated successfully!", "success");
      setEditingId(null);

      setIsUpdateModal(false);
    } else {
      const id = Date.now();
      addNote({ id, title, content });
      showToast("Note added successfully!", "success");
      setShowModal(false);
    }
    setTitle("");
    setContent("");
  }

  const handleDelete = () => {
    deleteNote(editingId);
    setIsUpdateModal(false);
    showToast("Note deleted successfully!", "success");
  };
  console.log("user===-------+++=++", user);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Good Morning {user?.username}!</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <NoteCard
          note={notes}
          onEdit={() => setIsUpdateModal(true)}
          setSelectedNote={setSelectedNote}
          id={setEditingId}
        />
      </div>

      <FloatingButton onClick={handleFloatingClick} />
      {showModal && (
        <AddNoteModal
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
      {isUpdateModal && (
        <UpdateNoteModal
          onClose={() => setIsUpdateModal(false)}
          title={selectNote?.title}
          content={selectNote?.content}
          onChange={(e) =>
            setSelectedNote({ ...selectNote, content: e.target.value })
          }
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default page;
