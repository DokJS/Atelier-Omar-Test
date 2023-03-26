import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import LargePlayerCard from './LargePlayerCard'
import { DialogContent } from '@material-ui/core'
import { Player } from '../models/types'
import '../styles/Modal.scss'

interface ModalContainerProps {
    player: Player
    handleClose: () => void
}
export default function ModalContainer({
    player,
    handleClose,
}: ModalContainerProps) {
    return (
        <Modal
            aria-labelledby="modal"
            className="modal-container"
            onClose={handleClose}
            open={true}
        >
            <DialogContent className="modal-body">
                <CloseIcon className="modal-close-icon" onClick={handleClose} />
                <LargePlayerCard player={player} />
            </DialogContent>
        </Modal>
    )
}
