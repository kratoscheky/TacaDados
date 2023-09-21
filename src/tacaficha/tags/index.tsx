import {useEffect, useState} from "react";
import {Container, HPM, Icon, PPA, RPV} from "./styles";
import poderIcon from './images/poderIcon.svg'
import habilidadeIcon from './images/habilidadeIcon.svg'
import resistenciaIcon from './images/resistenciaIcon.svg'

export const Tags = () => {
    const [fichaStatus, setFichaStatus] = useState<any>(null)

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams: any = new URLSearchParams(queryString);

        if(!urlParams.get('p') && !urlParams.get('h') && !urlParams.get('r'))
            return

        const ficha = {
            p: parseInt(urlParams.get('p')),
            h: parseInt(urlParams.get('h')),
            r: parseInt(urlParams.get('r'))
        }

        setFichaStatus(ficha)
    }, []);

    if(!fichaStatus)
        return null

    return(
        <Container>
            <PPA>
                <Icon src={poderIcon} />
                <p>{fichaStatus.p}</p>
            </PPA>
            <HPM>
                <Icon src={habilidadeIcon} />
                <p>{fichaStatus.h}</p>
            </HPM>
            <RPV>
                <Icon src={resistenciaIcon} />
                <p>{fichaStatus.r}</p>
            </RPV>
        </Container>
    )
}