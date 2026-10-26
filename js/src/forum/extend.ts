import Extend from 'flarum/common/extenders';
import Model from 'flarum/common/Model';
import DethronedNotification from './components/DethronedNotification';

/** A game as a dethroned alert's subject carries it. */
export class ArcadeGame extends Model {
  title = Model.attribute<string>('title');
  slug = Model.attribute<string>('slug');
  thumbnailUrl = Model.attribute<string | null>('thumbnailUrl');
  scoreLabel = Model.attribute<string | null>('scoreLabel');
}

export default [
  new Extend.Store().add('insert-coin-games', ArcadeGame),

  new Extend.Notification().add('insertCoinDethroned', DethronedNotification),

  // Every page is its own chunk: nothing of the arcade loads on other pages.
  new Extend.Routes()
    .add('insert-coin.home', '/arcade', () => import('./pages/ArcadePage'))
    .add('insert-coin.moderate', '/arcade/moderate', () => import('./pages/ModeratePage'))
    .add('insert-coin.game', '/arcade/:slug', () => import('./pages/GamePage'))
    .add('user.arcade', '/u/:username/arcade', () => import('./pages/UserArcadePage')),
];
