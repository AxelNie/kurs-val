import "../styles/MyCourses.css"


const ToggleOverviewButton = ({ showOverview, setShowOverview }) => {

    const onToggle = () => {
        setShowOverview(!showOverview);
    }

    return (<div>
        <span style=onClick={onToggle}>Mina terminer</span>
        <span onClick={onToggle}>�versikt</span>
    </div>)
}

export default ToggleOverviewButton;