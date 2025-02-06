import Button from './Button';
function ScanFrom({ isSubmitting, onSubmit }) {
  return (
    <div className="text-center">
      <input
        type="text"
        name="url"
        defaultValue=""
        className="mr-2 w-80 rounded border-2 border-stone-200 px-2 py-[6px] text-stone-700 outline-2 outline-slate-200"
        placeholder="Search or scan a URL"
      />
      <Button isSubmitting={isSubmitting}>Scan</Button>
    </div>
  );
}

export default ScanFrom;
