

const UserProfile = ({Username}) => {
  return (
    <div>
      <h2>Datos del Usuario</h2>
      <h4> {Username ? Username.usuario : "Usuario no disponible" } </h4>
    </div>
  )
}

export default UserProfile