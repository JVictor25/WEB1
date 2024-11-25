import './index.css'
export default function Sobre() {
    return (  
    <>
    <div className="w-100 my-4 pb-3 d-flex flex-wrap justify-content-center text-center">
        <h1 className="col-12">SOBRE</h1>
        <h1 className="my-4 text-start col-9">Proposta pedagógica</h1>
        <div className="col-md-9 col-lg-6 col-10 d-flex align-items-end m-3">
            <p className="text-start">
                O fundador do Instituto Tecnológico Alan Turing começou um trabalho voltado para crianças e jovens por
                meio da educação, levando em consideração aspectos relacionados às suas identidades e necessidades
                individuais. Ele propôs uma abordagem educacional muito prática, centrada na presença, no amor pela
                natureza, na solidariedade e no aprendizado prático. Em vez de criar uma nova teoria pedagógica, ele
                desenvolveu uma proposta educacional que atendesse às demandas da realidade da época. Os princípios da
                educação no IEAT resistiram ao longo do tempo por duas razões principais: a firme crença do fundador e
                dos colaboradores do IEAT na missão e a capacidade de se adaptar a culturas em constante mudança.
                A prática pedagógica no IEAT favorece o diálogo entre as ciências, as sociedades e as culturas sob uma
                visão da realidade, o que possibilita compreender as necessidades humanas e sociais atuais,
                questioná-las, encontrar soluções e enfrentar desafios. A prática pedagógica no IEAT favorece o diálogo entre as ciência
               
            </p>
        </div>
        <img src="./imgs/ensino.jpg" alt="Ensino" className="col-md-6 col-lg-3 col-10 d-block mb-3"/>
        <div className="col-9">
            <p className="text-start">
                A prática pedagógica no IEAT favorece o diálogo entre as ciências, as sociedades e as culturas sob uma
                visão da realidade, o que possibilita compreender as necessidades humanas e sociais atuais,
                questioná-las, encontrar soluções e enfrentar desafios. Ao considerar a interconexão entre as diferentes
                dimensões da pessoa, incluindo a dimensão espiritual, ela busca promover a integralidade e a totalidade
                dos sujeitos da educação, integrando fé, cultura e vida. Ao mesmo tempo, valoriza a diversidade, a
                diferença, a solidariedade, a consciência global e a promoção de relações justas, incorporando uma
                variedade de conhecimentos, linguagens, mídias e tecnologias em suas metodologias, conforme o Projeto
                Educativo do IEAT.
            </p>
        </div>  
        <div className="d-flex justify-content-center flex-wrap col-12">
            <a className="btn btn-primary m-3 col-md-6 col-lg-4 col-10" href="/docentes">Saiba mais sobre os docentes de nossa Instituição!</a>
            <a className="btn btn-primary m-3 col-md-5 col-lg-3 col-10" href="/cursos">Saiba mais sobre os cursos ofertados!</a>
        </div>
       
      
    </div>
    
    
    </>
    )
}