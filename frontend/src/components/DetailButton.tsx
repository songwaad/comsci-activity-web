"use client";

interface DetailButtonProps {
  id: string;
  buttonText: string;
}

export default function DetailButton({ id, buttonText }: DetailButtonProps) {
  return (
    <button 
      className="px-4 py-1 rounded-md primary-button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `/activities/${id}`;
      }}
    >
      {buttonText}
    </button>
  );
} 