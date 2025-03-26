import { APIs } from "../../../shared/api";

export const register = async (formData) => {
    try {
        const response = await APIs.user.registration(formData);
        console.log("Успешный вход:", response);
    } catch (error) {
        console.error("Ошибка входа:", error);
    }
};
