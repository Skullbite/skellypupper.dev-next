import LinkIcon from './LinkIcon'

export default ({ name, github, dead, description, color, image, langAsset, deathReason }) => <div className="info-box" style={ !dead ? { borderColor: `var(--${color})` } : {} }>
    <img src={ image.includes(`://`) ? image : `/assets/${image}` } style={ dead ? { filter: "grayscale(1)" } : {} } />
    <div className="info-text">
        <h3><i className={`bi bi-${langAsset} project-lang`}/>{ name }</h3>
        <p>{ description }</p>
        <p style={{ color: "#dc4646" }}>{ deathReason }</p>
        { github ? 
        <div className="buttons">
            <LinkIcon
            tooltipText="View Source Code"
            iconClass="bi bi-github"
            href={ github }
            />
        </div> : <></>
        }
    </div>
</div>