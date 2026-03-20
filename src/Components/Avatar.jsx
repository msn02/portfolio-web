import misty from '/images/Misty.png';

export default function Avatar() {
    return (
        <img
            src={misty}
            alt="Misty Shaine Niones"
            className="
                size-40 rounded-full
                absolute -translate-y-3/4
                left-1/2 -translate-x-1/2
                lg:left-auto lg:-translate-x-0
                border-4 border-white shadow
            "
        />
    );
}