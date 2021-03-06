import './Bender.css';

// La ilustracion de Bender creada con CSS
function Bender({ lookAt = 12 }) {
  const pupilDiameter = 24;
  const eyesX = lookAt < pupilDiameter ? lookAt : pupilDiameter;
  const eyesY =
    lookAt < pupilDiameter / 2
      ? lookAt
      : lookAt < pupilDiameter
      ? pupilDiameter - lookAt
      : 0;

  return (
    <div className="bender__container">
      <div className="antena__ball"></div>
      <div className="antena__stick"></div>
      <div className="antena__ball-1"></div>
      <div className="bender__face">
        <div className="bender__light">
          <div className="bender__light--second"></div>
        </div>
        <div className="bender__eyes--container">
          <div className="bender__eyes--container-black">
            <div className="eyes__left">
              <div
                className="eyes__pupil"
                style={{
                  transform: `translateX(${eyesX}px) translateY(${eyesY}px)`,
                }}
              ></div>
            </div>
            <div className="eyes__right">
              <div
                className="eyes__pupil"
                style={{
                  transform: `translateX(${eyesX}px) translateY(${eyesY}px)`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mouth">
          <div className="horizontal__teeth-1"></div>
          <div className="horizontal__teeth-2"></div>
          <div className="vertical__teeth-1"></div>
          <div className="vertical__teeth-2"></div>
          <div className="vertical__teeth-3"></div>
          <div className="vertical__teeth-4"></div>
          <div className="vertical__teeth-5"></div>
          <div className="lips"></div>
        </div>
      </div>
    </div>
  );
}

export default Bender;
