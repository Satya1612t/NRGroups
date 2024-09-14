import { MutatingDots } from "react-loader-spinner"

export const Spinner = () => {

    return (
        <>
            <div className="h-screen min-w-full bg-white opacity-50">
                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#808080"
                    secondaryColor="#808080"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    wrapperClass="" />
            </div>
        </>
    )
}