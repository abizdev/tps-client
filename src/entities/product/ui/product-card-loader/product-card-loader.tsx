import React from 'react';

interface Props {
  className?: string;
}

// TODO: add product card loader
const ProductCardLoader: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
		</div>
	);
};

export default ProductCardLoader;
