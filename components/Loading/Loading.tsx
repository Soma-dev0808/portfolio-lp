import loadingStyle from '../../styles/loading.module.css';

const Loading = () => {
    return (
        <div className={loadingStyle.loadingContainer}>
            <div className={loadingStyle.middle} >
                <div className={`${loadingStyle.bar} ${loadingStyle.bar1}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar2}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar3}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar4}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar5}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar6}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar7}`}></div>
                <div className={`${loadingStyle.bar} ${loadingStyle.bar8}`}></div>
            </div>
        </div>

    );
};

export default Loading;
