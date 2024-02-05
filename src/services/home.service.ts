import { Home } from '@/constants'
import { apiService } from './api.service'

/** ********************* Home SERVICES START ************************ */

/**
 * @description Get all recruiters
 * @param {}
 * @return IRecruiter[]
 * @url /recruiter
 * @method GET
 */

export const getAllRecruiters = (): Promise<any> => {
  return apiService.get<any, object>(Home.ARTICLEFAVORITE)
}

/** ********************* ADMIN SERVICES END ************************ */
