function Button({ children, isSubmitting }) {
  const submitting = isSubmitting === 'submitting' || isSubmitting === true;
  return (
    <button
      className={`rounded bg-purple-700 px-7 py-2 font-semibold text-stone-100 ${submitting && 'cursor-not-allowed'}`}
      disabled={submitting}
    >
      {submitting ? 'scanning...' : children}
    </button>
  );
}

export default Button;
