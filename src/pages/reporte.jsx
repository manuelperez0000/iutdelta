import { useEffect, useState } from "react"
import Container from "../components/container"
import Navbar from "../components/navbar"
import Colage from "../components/colage"
const Reporte = () => {
    const [entregas, setEntregas] = useState()
    useEffect(() => {
        const localEntregas = localStorage.getItem('entregas')
        if (localEntregas) {
            setEntregas(JSON.parse(localEntregas))
        } else {
            setEntregas(null)
        }
    }, [])
    return (<>
        <Navbar />
        <Colage />
        <Container>
            {/* <div className="flex-bet"> */}
            <h3>Reporte de entregas</h3>
            {/* <button className="btn btn-primary">Emitir reporte</button> */}
            {/*  </div> */}
            <hr />
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Cedula</th>
                    <th>Pnf</th>
                    <th>Fecha de entrega</th>
                </thead>
                <tbody>
                    {entregas ? entregas.map((entrega, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{entrega.name}</td>
                                <td>{entrega.ci}</td>
                                <td>{entrega.pnf}</td>
                                <td> {entrega.fecha}</td>
                            </tr>
                        )
                    }) : <tr>
                        <td className=" p-4 text-center" colSpan={5}>
                            <h4>
                                No hay entregas registradas
                            </h4>
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </Container>
    </>
    )
}
export default Reporte