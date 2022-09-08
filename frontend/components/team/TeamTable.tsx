import {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const TeamTable: FC = () => {
    return (
        <table className='w-full bg-bg-table shadow-lg'>
            <thead className='border-2 border-text-color text-sm text-text-color'>
                <th className='w-[33%] border-r-2 border-text-color  p-1.5'>Name</th>
                <th  className='w-[33%] border-r-2 border-text-color p-1.5'>Role</th>
                <th className=' w-[33%] whitespace-wrap p-1.5'>Remove Member</th>
            </thead>
            <tbody className='border-2 border-text-color text-md'>
                <tr className='text-center'>
                    <td className='w-[33%] border-r-2 border-text-color  p-1.5'>MagiiK</td>
                    <td className='w-[33%] border-r-2 border-text-color'>
                        <select className={`w-full h-full p-2 text-white bg-bg-table`}>
                            <option value="" className='text-primary-color'>Lead</option>    
                            <option value="" className='text-orange-color'>Head Mod</option>    
                            <option value="" className='text-blue-color'>Mod</option>    
                        </select>
                    </td>
                    <td className='w-[33%] border-r-2 border-text-color  p-1.5 text-red-600'>
                        <FontAwesomeIcon icon={faClose}/>
                    </td>
                </tr>
            </tbody>
            
            <tfoot className='border-2 border-text-color text-sm text-blue-color'>
                <tr>
                    <th className='w-[33%] border-r-2 border-text-color  p-1.5'>Total Member: <span className='text-white text-lg'>1</span></th>
                    <th className='w-[33%] border-r-2 border-text-color  p-1.5'>
                        <div className='h-full w-full flex text-white text-xs border-[2px] border-black rounded'>
                            <div className='w-[20%] bg-primary-color'>2</div>
                            <span className='w-[50%] bg-orange-color h-full'>5</span>
                            <span className='w-[30%] bg-blue-color h-full'>10</span>
                        </div>
                    </th>
                    <th className='text-white flex items-center gap-x-1 justify-center text-sm'>
                        <span className='text-green-500 text-xl pt-1'>+ </span><span className='text-sm pt-1'>Add Member</span>
                    </th>
                </tr>
            </tfoot>
        </table>        
    )
}
export default TeamTable