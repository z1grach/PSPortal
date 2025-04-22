import {
    ConnectionIcon, ContactsIcon,
    HomeIcon,
    ModerationIcon, QuestionsIcon,
    ReviewsIcon, SettingsIcon,
    TeamIcon, TelegramIcon,
    WalletIcon
} from "../../../shared/assets/icons";

export const menuItems = [
    {title: 'Главная', path: '/home', icon: HomeIcon},
    {title: 'Мои команды', path: '/teams', icon: TeamIcon},
    {title: 'Подключение', path: '/connection', icon: ConnectionIcon},
    {title: 'Модерация', path: '/moderation', icon: ModerationIcon},
    {title: 'Кошелёк', path: '/wallet', icon: WalletIcon},
    {title: 'Отзывы', path: '/reviews', icon: ReviewsIcon},
    {title: 'Вопросы', path: '/questions', icon: QuestionsIcon},
    {title: 'Настройки', path: '/settings', icon: SettingsIcon, divider: true},
    {title: 'Контакты', path: '/contacts', icon: ContactsIcon},
    {title: 'Telegram канал', path: '/telegram', icon: TelegramIcon},
];