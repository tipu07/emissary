import React from "react";

const TransTbl = ({ dataLst }) => {
	const { thead, tbody } = dataLst;
	return (
		<>
			<div className="blk">
				<div className="tbl_blk">
					<table>
						<thead>
							<tr>
								<th>{thead.num}</th>
								<th>{thead.name}</th>
								<th width="140">{thead.price}</th>
								<th>{thead.date}</th>
								<th width="80">{thead.status}</th>
							</tr>
						</thead>
						<tbody>
							{tbody.td.map((val) => {
								return (
									<tr key={val.id}>
										<td className="nowrap">{val.num}</td>
										<td>{val.name}</td>
										<td className="nowrap">{val.price}</td>
										<td className="nowrap">{val.date}</td>
										<td>
											<span className="badge green">{val.status}</span>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TransTbl;
