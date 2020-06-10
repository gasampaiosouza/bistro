import React from 'react';
import './default.css';

type BoxProps = {
  media?: number[];
  itemName: string;
  quantity: number;
};

const Box = ({ media, itemName, quantity }: BoxProps) => {
  return (
    <div className="box--container">
      <span className="quantity">{quantity}</span>
      <div className="name--container">
        <h1 className="item--name">{itemName}</h1>
      </div>

      {media ? (
        <div className="media--container">
          <h2 className="media--title">Média de gastos</h2>
          <h2 className="media">
            R${' '}
            {(media.reduce((a, b) => a + b) / media.length)
              .toFixed(2)
              .toString()
              .replace('.', ',')}
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default Box;
