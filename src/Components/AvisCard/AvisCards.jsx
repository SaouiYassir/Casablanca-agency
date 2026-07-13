import './AvisCards.css';

function AvisCards({ nom, comment, stars }) {
  // Generates an array based on the star rating to render star characters cleanly
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    return index < stars ? '★' : '☆';
  });

  return (
    <>
      <div className="avis-card">
        {/* Editorial Quote Indicator Icon */}
        <span className="quote-mark">“</span>

        {/* Dynamic Star Rating Row */}
        <div className="avis-stars" aria-label={`Note de ${stars} sur 5`}>
          {ratingStars.map((star, i) => (
            <span key={i} className={star === '★' ? 'star filled' : 'star'}>
              {star}
            </span>
          ))}
        </div>

        {/* Review Content Paragraph */}
        <p className="avis-comment">{comment}</p>

        {/* Separator & Client Identification Name */}
        <div className="avis-footer">
          <span className="avis-line"></span>
          <h4 className="avis-name">{nom}</h4>
        </div>
      </div>
    </>
  );
}

export default AvisCards;