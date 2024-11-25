export function ProfCard(props) {
    return(
        <>
            <article class="professor">
                    <div class="left-align">
                        <img class="professor_logo" src={props.imagesrc} alt="Retrato do Professor" />
                        <h2>{props.title}</h2>
                        <p>{props.degree}</p>
                        <p>{props.description}</p>
                    </div>
                    <div class="right-align">
                        <p>{props.story}</p>
                    </div>
                </article>
        </>
    )
}