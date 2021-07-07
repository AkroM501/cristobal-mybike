const getCookie = (name: string, cookie: string) => {
    if (!cookie) return false;

    const match = cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));

    if (match) return match[2];
    return false;
};

export default getCookie;
