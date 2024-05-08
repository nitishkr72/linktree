import './App.css';

function ListItemComponent({ title, link }) {
    return <div className="listItem" style={{height: 56, borderRadius: "0.5rm", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <span style={{fontSize: 20, fontWeight: "600"}}>{title}</span>
    </div>
}

export default ListItemComponent;