import './Loading.css'

// Renderiza la cara de Bender con una animacion
// Y el texto que le pasemos para indicar que esta
// cargando
function Loading({ text }) {
    return (
        <div className="loading__container">
            <div className="loading__bender__container">
                <div className="loading__antena__ball"></div>
                <div className="loading__antena__stick"></div>
                <div className="loading__antena__ball-1"></div>
                <div className="loading__bender__face">
                    <div className="loading__bender__light">
                        <div className="loading__bender__light--second"></div>
                    </div>
                    <div className="loading__bender__eyes--container">
                        <div className="loading__bender__eyes--container-black">
                            <div className="loading__eyes__left">
                                <div className="loading__eyes__pupil"></div>
                            </div>
                            <div className="loading__eyes__right">
                                <div className="loading__eyes__pupil"></div>
                            </div>
                        </div>
                    </div>
                    <div className="loading__mouth">
                        <div className="loading__horizontal__teeth-1"></div>
                        <div className="loading__horizontal__teeth-2"></div>
                        <div className="loading__vertical__teeth-1"></div>
                        <div className="loading__vertical__teeth-2"></div>
                        <div className="loading__vertical__teeth-3"></div>
                        <div className="loading__vertical__teeth-4"></div>
                        <div className="loading__vertical__teeth-5"></div>
                        <div className="loading__lips"></div>
                    </div>

                </div>




            </div>
            <p className="loading__testimonial_text">{text}</p>
        </div>
    )
}

export default Loading;
