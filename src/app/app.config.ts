
import { environment } from 'src/environments/environment';
export class AppConfig {
    public static APP_CONFIG = {
        app: '',
        defaultLanguage: 'vi',
        loginErrorCode: 'LOGIN_FAILED',
        successCode: '200',
        showInTab: true,
        paginationOption: [5, 10, 20],
        encryptKey: 'webappvodich1234'
    };
    public static APP_CODE = environment.STORAGE_APP_CODE;
    public static STORAGE_KEY = {
        currentLanguage: AppConfig.APP_CODE + '_defaultLanguage',
        userToken: AppConfig.APP_CODE + '_userToken',
        access_token: AppConfig.APP_CODE + '_access_token',
        refresh_token: AppConfig.APP_CODE + '_refresh_token',
        features: `${AppConfig.APP_CODE}_features`,
        menuItems: `${AppConfig.APP_CODE}_menu_items`,
        currentFeature: `${AppConfig.APP_CODE}_current_feature`,
        refresh_token_expires_in: `${AppConfig.APP_CODE}_refresh_token_expires_in`,
        last_action_time: `${AppConfig.APP_CODE}_last_action_time`,
    };
    public static LANGUAGES = [
        {
            key: 'vi',
            alt: 'Vietnamese',
            title: 'Việt Nam',
            flag: 'vn'
        }
    ];

    // get value in lib
    public get appConfig() {
        return AppConfig;
    }
}

