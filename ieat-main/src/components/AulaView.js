function AulaView() {
    return (
        <div className="video-container">
        <div className="video-player embed-responsive embed-responsive-21by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8" title="Aula" frameBorder="0"
                gesture="media" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>

        <div id="accordion" className="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            Módulo 1: Introdução à Análise de Redes
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>O que são Redes Complexas?</span>
                                <span className="duration">10:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Teoria dos Grafos Aplicada</span>
                                <span className="duration">12:30</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Análise Estrutural de Redes</span>
                                <span className="duration">15:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            Módulo 2: Métricas e Medidas em Redes
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Centralidade e Prestígio</span>
                                <span className="duration">20:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Coeficientes de Clusterização</span>
                                <span className="duration">25:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Medidas de Centralidade em Grafos</span>
                                <span className="duration">30:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree">
                            Módulo 3: Aplicações da Análise de Redes
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Redes Sociais e Interacionais</span>
                                <span className="duration">20:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Redes em Epidemiologia</span>
                                <span className="duration">25:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Redes Biológicas e de Cooperação</span>
                                <span className="duration">30:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"
                            aria-expanded="false" aria-controls="collapseFour">
                            Módulo 4: Ferramentas Avançadas em Análise de Redes
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Simulação de Redes Complexas</span>
                                <span className="duration">20:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Modelagem de Redes Dinâmicas</span>
                                <span className="duration">25:00</span>
                            </li>
                            <li className="nav-link ac" data-video-src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0">
                                <span>Análise de Redes Temporais</span>
                                <span className="duration">30:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
} export default AulaView