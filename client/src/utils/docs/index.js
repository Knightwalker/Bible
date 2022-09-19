const replaceDomainKeywordUtil = (str) => {
    const domain = process.env.REACT_APP_LOCAL_DOMAIN;
    const newStr = str.replaceAll("{DOMAIN}", domain);
    return newStr;
}

export { replaceDomainKeywordUtil }