import app from 'flarum/forum/app';
import Notification from 'flarum/forum/components/Notification';
import { t } from '../t';

/** "You've been dethroned on {game} by {user}." */
export default class DethronedNotification extends Notification {
  icon() {
    return 'fas fa-crown';
  }

  href() {
    const game: any = this.attrs.notification.subject();

    return game ? app.route('insert-coin.game', { slug: game.slug() }) : app.route('insert-coin.home');
  }

  content() {
    const game: any = this.attrs.notification.subject();
    const user = this.attrs.notification.fromUser();

    return t('notifications.dethroned', { game: game?.title?.() || '', user: user ? user.displayName() : '' });
  }

  excerpt() {
    return null;
  }
}
