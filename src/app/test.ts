import { useState } from 'react'

const useTest = ({ externalFunction }: { externalFunction: () => void }) => {
  const [testState, setTeststate] = useState<boolean>(false)

  const testFunction = async (test: boolean) => {
    setTeststate(test)

    console.log(testState)
  }

  return { testFunction, testState }
}
