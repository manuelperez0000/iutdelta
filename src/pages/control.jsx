import { useEffect, useState } from "react"
import Container from "../components/container"
import Navbar from "../components/navbar"
import Colage from "../components/colage"
const Control = () => {
    const [alumnos, setAlumnos] = useState()
    const [alumno, setAlumno] = useState()
    useEffect(() => {
        const dbalumnos = localStorage.getItem('alumnos')
        if (dbalumnos) {
            const formatedAlumnos = JSON.parse(dbalumnos)
            setAlumnos(formatedAlumnos)
        }
    }, [])

    const entregar = () => {
        const localEntregas = localStorage.getItem('entregas')
        if (localEntregas) {
            const entregas = JSON.parse(localEntregas)
            const entrega = alumno
            entrega.fecha = Date()
            entregas.push(entrega)
            localStorage.setItem('entregas', JSON.stringify(entregas))
        } else {
            const entrega = alumno
            entrega.fecha = Date()
            localStorage.setItem('entregas', JSON.stringify([entrega]))
        }
        alert("Se a generado un reporte de entrega")
    }

    const buscar = (e) => {
        e.preventDefault()
        const cedula = e.target.ci.value
        const target = alumnos.filter((al) => {
            return al.ci === cedula
        })
        if (target.length === 0) {
            alert("No se encuentra registrado")
            setAlumno(null)
            return
        } else {
            setAlumno(target[0])
        }
    }
    return (<>
        <Navbar />
        <Colage />
        <Container>
            <h3>Control de Alumnos</h3>
            <hr />
            <form onSubmit={(e) => buscar(e)}>
                <div className="row">
                    <div className="col-8">
                        <input required name="ci" type="text" className="form-control" placeholder="Ingrese la cedula" />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary w-100">Buscar</button>
                    </div>
                </div>
            </form>
            <div className="row border mt-4 text-dark">
                {alumno ? <>
                    <div className="col-12 p-4">
                        <div className="flex-bet">
                            <h4>Informacion del alumno</h4>
                            <button onClick={() => entregar()} className="btn btn-warning px-4" > Entregar Alimentos </button>
                        </div>

                        <div>Nombre: {alumno.name} <br /></div>
                        <div>Cedula:{alumno.ci}<br /></div>
                        <div>Telefono:{alumno.phone}<br /></div>
                        <div>PNF:{alumno.pnf}<br /></div>

                    </div>
                </> : <div className="p-5 text-center">
                    <h4>Ingrese la cedula del alumno</h4>
                </div>}
            </div>
            <div className="mt-4">
                <h3>Alumnos Registrados</h3>
                <hr />
                <table className="table">
                    <thead>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Pnf</th>
                    </thead>
                    <tbody>
                        {alumnos ? alumnos.map((al, index) => {
                            return (<tr key={index}>
                                <td>{index}</td>
                                <td>{al.name}</td>
                                <td>{al.ci}</td>
                                <td>{al.pnf}</td>
                            </tr>)
                        }) :
                            <div className="p-5 text-center"> <b> No hay alumnos registrados! </b> </div>
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    </>
    )
}
export default Control