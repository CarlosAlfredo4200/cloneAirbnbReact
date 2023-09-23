// eslint-disable-next-line react/prop-types
const Alerta = ({ alert }) => {
  // eslint-disable-next-line react/prop-types
  return <div className={`${alert.error ? 'div-alert-error' : 'div-alert'}`}>{alert.msg}</div>;
};

export default Alerta;
