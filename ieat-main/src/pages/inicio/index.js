export default function Inicio() {
    return (
        <>
            <img src="./imgs/inicio-img.jpg" alt="IEAT" className="w-100" />
            <div className="container w-100 d-flex flex-wrap justify-content-center">
                <div className="col-12 d-flex flex-row flex-wrap justify-content-md-between m-3">
                <div className="col-xl-6 col-md-7 col-11 d-flex align-items-center">
                    <p>A Educação nos acompanha ao longo da vida, em uma jornada de conhecimento, desafios, alegrias e
                        descobertas. A cada aprendizado, nos transformamos e mudamos o mundo. Na IEAT, estamos lado a lado
                        com o estudante, vivenciando experiências dentro e fora da sala de aula. Com formação humana,
                        qualidade de ensino, resultados acadêmicos e incentivo ao protagonismo e à solidariedade, preparamos
                        para o futuro. A partir do olhar para o presente, construímos caminhos para a autonomia e seguimos
                        sendo referência como rede de colégios que, há mais de 10 anos, faz a diferença na missão de educar
                        crianças, adolescentes e jovens!</p>
                    </div>
                    <img src="./imgs/tecnologia.jpg" alt="Tecnologia" className="col-md-5 d-none d-md-block " />
                
            </div>
            
            <div className="carousel slide col-md-12 col-11" data-bs-ride="carousel" id="imagens-de-cursos">
                <div className="carousel-indicators">
                    <button className="active" data-bs-target="#imagens-de-cursos" data-bs-slide-to="0"></button>
                    <button className="" data-bs-target="#imagens-de-cursos" data-bs-slide-to="1"></button>
                    <button className="" data-bs-target="#imagens-de-cursos" data-bs-slide-to="2"></button>
                    <button className="" data-bs-target="#imagens-de-cursos" data-bs-slide-to="3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active"><img src="imgs/R.V_e_R.A" alt="" className="d-block w-100" />
                    <div className="carousel-caption">
                        <h5>Curso de Análise de redes</h5>
                    </div>
                    </div>
                    <div className="carousel-item"><img src="imgs/educacao.jpg?auto=yes" alt="" className="d-block w-100" />
                    <div className="carousel-caption">
                    <h5>Curso de Análise de redes</h5>
                    </div>
                    </div>
                    <div className="carousel-item"><img src="imgs/I.A..jpg?auto=yes" alt="" className="d-block w-100" />
                        <div className="carousel-caption">
                            <h5>Curso de Análise de redes</h5>
                        </div>
                    </div>
                    <div className="carousel-item"><img src="imgs/bioinfo.jpg?auto=yes" alt="" className="d-block w-100" />
                        <div className="carousel-caption">
                            <h5>Curso de Análise de redes</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#imagens-de-cursos" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span></button>
                <button className="carousel-control-next" data-bs-target="#imagens-de-cursos" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span></button>
            </div>


            <a className="btn btn-primary m-3" href="/sobre">Saiba mais sobre a Instituição!</a>

                <div className="matricula-e-professor m-3 col-12 d-flex flex-wrap justify-content-center">
                    <div className="col-md-4 col-10 text-center">
                        <h5>Quer se tornar um(a) aluno(a)?</h5>
                        <a className="btn btn-primary m-3" href="/formMatricula">Matricule-se</a>
                    </div>

                    <div className="col-md-4 col-10 text-center">
                        <h5>Quer se tornar um(a) professor(a)</h5>
                        <a className="btn btn-primary m-3" href="/formularioContato">Trabalhe Conosco</a>
                    </div>
                </div>

                <div className="col-md-8 col-12 d-flex flex-wrap m-3 justify-content-center">
                    <div className="col-md-5 col-10 m-2">
                        <h5 className="text-primary">Telefone</h5>
                        <h5>(84) 3232-3232</h5>
                    </div>

                    <div className="col-md-5 col-10 m-2">
                        <h5 className="text-primary">Endereço</h5>
                        <h5>Av. Senador Salgado Filho, 3000, BR101 km, R. das Artes - Lagoa Nova, Natal - RN, 59078-970</h5>
                    </div>

                    <div className="col-md-5 col-10 m-2">
                        <h5 className="text-primary">Horário de Atendimento</h5>
                        <h5>Segunda a Sexta – 7h às 17h</h5>
                    </div>

                    <div className="col-md-5 col-10 m-2">
                        <h5 className="text-primary">Central de Relacionamento</h5>
                        <h5>Telefone: 0800-0000-999 ou pelo WhatsApp: 84 2024-2044</h5>
                    </div>
                </div>
            </div>
        </>
    )
}