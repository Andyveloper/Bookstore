const InputNewBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add-new-book">
      <h2>Add New Book</h2>
      <form
        className="add-book"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="add-book__title"
          id="add-title"
          placeholder="Book Title"
        />
        <input
          type="text"
          className="add-book__title"
          id="add-author"
          placeholder="Author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputNewBook;
