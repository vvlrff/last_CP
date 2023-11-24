import s from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={s.container}>
            <span className={s.loader}></span>
        </div>
    );
};

export default Loader;
