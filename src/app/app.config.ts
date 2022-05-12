
import { environment } from 'src/environments/environment';
export class AppConfig {
    public static APP_CONFIG = {
        app: '',
        defaultLanguage: 'vi',
        loginErrorCode: 'LOGIN_FAILED',
        successCode: '200',
        showInTab: true,
        paginationOption: [10, 20, 50],
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

export const END_POINT = {
    authen: 'oauth/token',
    group_api: 'bank-plus/groups',
    user_api: 'bank-plus/users',
    user_paging_api: 'bank-plus/users/paging',
    feature_api: 'bank-plus/features',
    feature_dropList_api: 'bank-plus/features?featureType=',
    role_api: 'bank-plus/users/roles',
    role_permission_api: 'bank-plus/users/roles?roleType=',
    user_actions_api: 'bank-plus/users/actions',
    role_add_permission_api: 'bank-plus/users/role-permissions',
    role_update_permission_api: 'bank-plus/users/role-permissions?roleId=',
    role_update_visibility_api: 'bank-plus/users/role-visibilities?roleId=',
    role_create_visibility_api: 'bank-plus/users/role-visibilities',
    get_menu: 'bank-plus/users/menus'
};

