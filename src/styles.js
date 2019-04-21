export const boxShadow = {
    boxShadow:
        '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};
export const transition = {
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};

export const conatinerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
export const container = {
    ...conatinerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    }
};