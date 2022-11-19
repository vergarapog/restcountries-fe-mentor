import ClipLoader from "react-spinners/ClipLoader"

const Loading = () => {
  return (
    <div className="flex justify-center">
      <ClipLoader
        color="#ffffff"
        loading={true}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
