import { useState, useLayoutEffect } from "react";

const SidePattern = ({ imgPathLeft, imgPathRight, width }) => {
  const [patternWidth, setPatternWidth] = useState(500);

  useLayoutEffect(() => {
    setPatternWidth(width-500)
  }, [width])

  return (
    <>
      <div
        className="absolute left-0 bottom-0 z-20 h-full"
        style={{
          maxWidth: '500px',
          width: `${patternWidth}px`,
          minWidth: '350px',
          overflow: 'hidden',
        }}
      >
        <div className="relative h-full float-right" style={{ width: '500px' }}>
          <img
            src={imgPathLeft}
            alt='left-side-pattern'
            className="absolute right-0 h-full"
            style={{ width: '500px' }}
          />
        </div>
      </div>
      <div
        className="absolute right-0 bottom-0 z-20 h-full"
        style={{
          maxWidth: '500px',
          width: `${patternWidth}px`,
          minWidth: '350px',
          overflow: 'hidden',
        }}
      >
        <div className="relative h-full float-left" style={{ width: '500px' }}>
          <img
            src={imgPathRight}
            alt='right-side-pattern'
            className="absolute h-full"
            style={{ width: '500px' }}
          />
        </div>
      </div>
    </>
  );
};

export default SidePattern;
