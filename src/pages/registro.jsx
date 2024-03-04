import Navbar from "../components/navbar"
import Container from "../components/container"
import Colage from "../components/colage"
const Registro = () => {
    const save = (e) => {
        e.preventDefault()

        const alumno = {
            name: e.target.name.value,
            ci: e.target.ci.value,
            phone: e.target.phone.value,
            pnf: e.target.pnf.value,
            address: e.target.address.value,
            trimestre: e.target.trimestre.value,
            edad: e.target.edad.value,
            nacimiento: e.target.nacimiento.value
        }
        //guardar lista de alumnos
        const alumnosPrevios = localStorage.getItem('alumnos')
        if (!alumnosPrevios) {
            const formatedAlumnos = [alumno]
            localStorage.setItem('alumnos', JSON.stringify(formatedAlumnos))
        } else {
            const dbAlumnos = JSON.parse(alumnosPrevios)
            /* console.log(dbAlumnos.filter((al)=>al.ci === alumno.ci))
            return */
            if ((dbAlumnos.filter((al) => al.ci === alumno.ci)).length > 0) {
                alert('ERROR: Este alumno ya se encuentra registrado')
                return
            }
            console.log(dbAlumnos)
            dbAlumnos.push(alumno)
            localStorage.setItem('alumnos', JSON.stringify(dbAlumnos))
        }
        alert("Alumno Registrado con exito")

    }
    return (<>
        <Navbar />
        <Colage />
        <Container>
            <h3>Registro de alumnos</h3>
            <hr />
            <form onSubmit={(e) => save(e)}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                Nombre y Apellido
                            </td>
                            <td>
                                <input required name="name" type="text" className="form-control" placeholder="Ingrese Nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Cedula
                            </td>
                            <td>
                                <input required name="ci" type="number" className="form-control" placeholder="Ingrese Cedula" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Telefono
                            </td>
                            <td>
                                <input required name="phone" type="text" className="form-control" placeholder="Ingrese Telefono" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PNF
                            </td>
                            <td>
                                <input required name="pnf" type="text" className="form-control" placeholder="Ingrese PNF" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Direccion
                            </td>
                            <td>
                                <input required name="address" type="text" className="form-control" placeholder="Ingrese Direccion" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Trimestre
                            </td>
                            <td>
                                <input required name="trimestre" type="text" className="form-control" placeholder="Ingrese Trimestre" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Edad
                            </td>
                            <td>
                                <input required name="edad" type="number" className="form-control" placeholder="Ingrese Edad" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Fecha de nacimiento
                            </td>
                            <td>
                                <input required name="nacimiento" type="date" className="form-control" placeholder="Ingrese Nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-lg btn-primary"> Guardar </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </Container>
    </>
    )
}
export default Registro