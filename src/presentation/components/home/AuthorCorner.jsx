import "./AuthorCorner.css";

const AuthorCorner = ({ authors }) => {
  return (
    <div className="author-section">
      <h2 className="section-heading">Author Corner</h2>

      <div className="author-grid">
        {authors.map((author) => (
          <div className="author-card" key={author.id}>
            <img
              src={author.image}
              alt={author.name}
              className="author-image"
            />

            <h3 className="author-name">{author.name}</h3>

            <p className="author-bio">{author.bio}</p>

            <div className="author-books">
              <strong>Books:</strong>
              <ul>
                {author.books.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorCorner;
