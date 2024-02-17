import "./host.css";

export default function Host({ hostData }) {
  return (
    <div className="host_div">
      <p>{hostData.name}</p>
      <img src={hostData.picture} alt={hostData.name} />
    </div>
  );
}
