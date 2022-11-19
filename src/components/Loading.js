import ClipLoader from "react-spinners/ClipLoader"
import { useGlobalContext } from "../context"

const Loading = () => {
  const { isDarkMode } = useGlobalContext()

  return (
    <div className="flex justify-center">
      <ClipLoader
        color={`${isDarkMode ? "#ffffff" : "#202c37"}`}
        loading={true}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
