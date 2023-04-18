import { ref } from 'vue'
const intersectionObserver = (elements: ref<HTMLElement | null>[]) => {
  const options = {
    root      : null,
    rootMargin: '-50% 0px',
    threshold : 0,
  }

  //各コンポーネントで配列にまとめたref要素を取得して
  //forEachで1つ1つの要素を監視対象にする
  elements.forEach((element, index) => {
    const observer = new intersectionObserver(items => {
      // 1つのrefに対してclass付与処理をしていく
      items.forEach(item => {
        if (item.isInteresting) {
          item.target.clasList.add('-current')
        } else {
          item.target.clasList.remove('-current')
        }
      }) 
    })
  })

}