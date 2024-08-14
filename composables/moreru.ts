// SSRで漏れる
const moreru = ref(0)
// SSRで漏れる
// const morenaideState = useState('morenaideState', () => 0)
export const useMoreru = () => {
  // SSRで漏れない
  // const morenai = ref(0)
  // SSRで漏れたりはしないが、グローバルな値。ページ遷移しても値は保持される(useState)
  const morenaideState = useState('morenaideState', () => 0)
  const morenaide = ref(0)
  const incrementMoreru = () => {
    morenaide.value++
    moreru.value++
    morenaideState.value++
  }
  return { moreru, morenaide, morenaideState, incrementMoreru }
}