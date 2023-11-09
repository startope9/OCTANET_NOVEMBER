
import './common.css'
import TypingText from './TypingText'

export default function Common() {
    return (
        <div>
            <div class="container" >
                <img src={require('/Codes/usejs/internship/src/images/chika.JPG')} alt='blah' />
                <div class="centered">
                    <TypingText text="Ball Badminton" />
                </div>
            </div>
        </div>
    )
}
