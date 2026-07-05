import './SkeletonCard.css';

function CardSkeleton() {
    return (
        <div className="car-rental-card car-rental-card-skeleton">
            {/* Photo */}
            <div className="card-image-wrapper">
                <div className="skeleton-block skeleton-image"></div>
            </div>

            {/* Top Row: Meta Tags & Badges */}
            <div className="card-badge-row">
                <div className="skeleton-block skeleton-tag"></div>
                <div className="skeleton-block skeleton-pill"></div>
            </div>

            {/* Main Information */}
            <div className="card-main-info">
                <div className="skeleton-block skeleton-title"></div>
                <div className="skeleton-block skeleton-year"></div>
            </div>

            {/* Middle Row: Specifications */}
            <div className="car-specs-row">
                <div className="spec-item">
                    <div className="skeleton-block skeleton-spec"></div>
                </div>
                <div className="spec-item">
                    <div className="skeleton-block skeleton-spec"></div>
                </div>
            </div>

            <hr className="card-divider" />

            {/* Bottom Row: Price & Primary Action */}
            <div className="card-footer-row">
                <div className="price-box">
                    <div className="skeleton-block skeleton-price"></div>
                </div>
                <div className="skeleton-block skeleton-btn"></div>
            </div>
        </div>
    );
}

export default CardSkeleton;