import * as React from 'react';
import styles from './playerAreaView.css';
interface Props {
  usersList: []
}
interface Props2 {
  card: {
    clicked: boolean,
    shown: boolean,
    fibonacciNum: number,
    playerName: string,
  },
  index: number
}
class PlayerSelectedCard extends React.Component<Props2, any> {
  constructor(props) {
    super(props);
  }
  render() {
    const card = this.props.card;
    let pokerCard;
    let leftStyle = { left: `${10 + this.props.index * 110}px` };
    if (!card.shown) {// 如果还不能翻牌， 意思是指有人已经出牌，但并没有全部出完
      pokerCard = <div><div className={`${styles.card} ${styles.cardBack}`} /><div>{this.props.card.playerName}</div></div>;
      if (card.clicked) { // 该玩家已经出牌，但是碍于场上玩家并没有全部出牌，不翻牌。
        pokerCard = <div><div className={`${styles.card} ${styles.cardBackClicked}`} /><div>{this.props.card.playerName}</div></div>;
      }
    } else { // 全部出完了，可以显示牌了
      pokerCard = (
        <div className={`${styles.card}`} style={{ background: '#149c37' }}>
            <div className={`${styles.cardContainer}`}>
              <div className={styles.smallCardId}>
                <span className={styles.smallCardIdSpan}>{this.props.card.fibonacciNum}</span>
              </div>
              <div className={styles.playerVote}>
                <span>{this.props.card.fibonacciNum}</span>
              </div>
            </div>
        </div>);
    }
    return (
      <div className={styles.cardWapper} style={leftStyle}>
        {pokerCard}
      </div>)
  }
}

export default class PlayerAreaView extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.usersList.map((card, index) => <PlayerSelectedCard key={index} index={index} card={card} />)}
      </div>)
  }
}

