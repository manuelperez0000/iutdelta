/* eslint-disable react/prop-types */
const Container = ({children}) => {
  return (
    <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
  )
}

export default Container