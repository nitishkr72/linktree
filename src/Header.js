import ListItemComponent from "./ListItemComponent";

const userDetail = {
    userName: "PrepInsta 2022",
    icons: [
        "insta", "discord", "github", "whatsapp", "telegram"
    ],
    links: [
        {
            title: "Linkedin",
            link: "https//wew/ddlksnf"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "Github",
            link: "https://sdfnlskdf/sdf"
        }, {
            title: "Telegram",
            link: "https://telegra"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        }, {
            title: "OnlyFans",
            link: "https://wwmkdmf.dfkd"
        },
    ]
}

function Header() {

    return (

        <div style={{ marginTop: "2rem" }}>
            <div style={{ position: "relative", marginTop: "3rem" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }} on>
                    <div style={{ position: "fixed", width: 40, height: 40, backgroundColor: "#F0F0F0", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", border: 1, borderStyle: "solid", borderColor: "#ccc" }}>
                        <span className="material-symbols-outlined">more_horiz</span>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
                    <img src="/icon.webp" alt="" height={96} width={96} className="profile" />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2rem", color: "#39E09B" }}>
                <span style={{ fontSize: 20, fontWeight: "bold" }}>{userDetail.userName}</span>
                <span style={{ fontSize: 16, marginTop: "0.5rem" }}>All Important Links below ?</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
                {userDetail.icons.map((item, index) => {
                    return <img key={index} src={`/${item}.svg`} alt="" width={40} height={40} />
                })}
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem", gap: "1rem" }}>
                {userDetail.links.map((item, index) => {
                    return <ListItemComponent key={index} title={item.title} link={item.link} />
                })}
            </div>
        </div>);

}

export default Header;